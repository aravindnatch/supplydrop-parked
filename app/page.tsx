export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 py-12">
      <h1 className="flex items-center gap-2 font-medium text-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="" width={18} height={18} />
        SupplyDrop
      </h1>

      <div className="mt-8 space-y-5 leading-relaxed text-neutral-400">
        <p>
          SupplyDrop was an inventory management software for resellers. It
          tracked every item automatically and let people list 10x faster
          across marketplaces like ebay, fb marketplace, and more.
        </p>
        <p>
          I started it in 2022 because I was reselling sneakers and
          couldn&apos;t keep track of my own inventory. Orders were scattered
          across my inbox, I was writing every listing by hand, and my
          spreadsheet never matched what I actually had. Other resellers had the
          same problem, and it became a venture-backed company.
        </p>
        <p>
          At its peak, SupplyDrop managed over $75M in inventory for thousands
          of resellers, some with tens of thousands of items each.
        </p>
        <p>
          As reselling slowed down, so did SupplyDrop, and we wound it down in
          2024.
        </p>
      </div>

      <footer className="mt-12 border-t border-neutral-900 pt-6 text-sm">
        <p className="text-neutral-200">Aravind Natchiappan</p>
        <p className="mt-1 text-neutral-600">Founder</p>
        <p className="mt-6 text-neutral-500">
          p.s. i'm still building cool stuff! catch up: {" "}
          <a
            href="https://aravindnatch.me"
            className="text-neutral-500 underline decoration-neutral-700 underline-offset-4 transition-colors"
          >
            aravindnatch.me
          </a>
        </p>
      </footer>
    </main>
  );
}
