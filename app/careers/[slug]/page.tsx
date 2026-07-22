import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {jobs} from "@/app/data/jobs";
import {buildPageMetadata} from "@/lib/seo";

type Props = {
  params: Promise<{slug: string}>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({slug: job.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    return buildPageMetadata({
      title: "Career Opportunity",
      description: "Explore careers at Dream Sky Airways.",
      path: `/careers/${slug}`,
      slug,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${job.title} Jobs – ${job.location}`,
    description: `${job.title} opening at Dream Sky Airways in ${job.location}. Salary ${job.salaryRange}. ${job.experience}.`,
    path: `/careers/${job.slug}`,
    slug: job.slug,
    location: job.location,
    extras: [
      `${job.title} vacancy`,
      "travel company jobs",
      "aviation jobs India",
      "Dream Sky Airways careers",
    ],
  });
}

export default async function CareerJobPage({params}: Props) {
  const {slug} = await params;
  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm text-blue-700 font-medium mb-3">
          Careers · Dream Sky Airways
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {job.title}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-8">
          <span className="bg-white border px-3 py-1 rounded-full">
            {job.location}
          </span>
          <span className="bg-white border px-3 py-1 rounded-full">
            {job.salaryRange}
          </span>
          <span className="bg-white border px-3 py-1 rounded-full">
            {job.experience}
          </span>
          <span className="bg-white border px-3 py-1 rounded-full">
            Apply by {job.lastDate}
          </span>
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Role Overview</h2>
          <p className="text-gray-700 leading-8 whitespace-pre-line">
            {job.description.trim()}
          </p>
          <div className="mt-8">
            <Link
              href="/careerform"
              className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
