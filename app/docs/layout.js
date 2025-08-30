// Layout applied only to /docs/* routes providing a sticky sidebar.
import Sidebar from './Sidebar.jsx';

export default function DocsLayout({ children }) {
    return (
        <div className="flex w-full">
            <aside className="docs-sidebar shrink-0 w-56 md:w-60 xl:w-64 px-4 pt-6 pb-12 sticky top-0 overflow-y-auto">
                <Sidebar />
            </aside>
                    <div className="flex-1 min-w-0">
                        <div className="docs-content pl-6 pr-4 md:pl-10 md:pr-8 xl:pl-16 xl:pr-14">
                    {children}
                </div>
            </div>
        </div>
    );
}
