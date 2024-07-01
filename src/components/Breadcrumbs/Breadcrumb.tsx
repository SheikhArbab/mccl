import { Link } from 'react-router-dom';
import { Translatable } from "@/components/index"
interface BreadcrumbProps {
  pageName: string;
  goTo?: string;
}
const Breadcrumb = ({ pageName, goTo = "Dashboard" }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white capitalize">
        <Translatable text={pageName} />
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium capitalize" to={`/${goTo}`}>
              <Translatable text={`${goTo}  /`} />
            </Link>
          </li>
          <li className="font-medium text-primary capitalize">   <Translatable text={pageName} /></li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
