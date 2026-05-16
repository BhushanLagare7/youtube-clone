"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/navigation";

import { useSuspenseQuery } from "@tanstack/react-query";

import { FilterCarousel } from "@/components/filter-carousel";
import { useTRPC } from "@/trpc/client";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = (props: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <ErrorBoundary fallback={<p>Error loading categories...</p>}>
        <CategoriesSectionSuspense {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSkeleton = () => {
  return <FilterCarousel data={[]} isLoading onSelect={() => {}} />;
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();
  const trpc = useTRPC();
  const { data: categories } = useSuspenseQuery(
    trpc.categories.getMany.queryOptions(),
  );

  const data = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };

  return <FilterCarousel data={data} value={categoryId} onSelect={onSelect} />;
};
