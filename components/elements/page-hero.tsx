import Link from "next/link";
import { BreadcrumbData } from "@/lib/types";

export default function PageHero({
  breadcrumbs,
}: {
  breadcrumbs?: BreadcrumbData[];
}) {
  const renderedBreadcrumb = breadcrumbs?.map((bc, index) => {
    return (
      <li className={`breadcrumb-item`} key={index}>
        <Link className={`${bc.isActive && "text-warning"}`} href={bc.url}>
          {bc.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className={`breadcrumb-wrapper`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`breadcrumb-inner`}>
                {renderedBreadcrumb && (
                  <>
                    <ul className={`items`}>
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      {renderedBreadcrumb}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
