import Link from "next/link";
import { BreadcrumbData } from "@/lib/types";

export default function PageHero({
  breadcrumbs,
}: {
  breadcrumbs?: BreadcrumbData[];
}) {
  const renderedBreadcrumb = breadcrumbs?.map((bc, index) => {
    return (
      <li key={index} className={`${bc.isActive && "active"}`}>
        <Link href={bc.url}>{bc.label}</Link>
      </li>
    );
  });

  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-inner">
            {renderedBreadcrumb && (
              <>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  {renderedBreadcrumb}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
