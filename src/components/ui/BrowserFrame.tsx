import type { ReactNode } from "react";

/**
 * CSS-only browser-window mockup used to reference external sites without
 * embedding their assets. Children render as the "page" area.
 */
export function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-md border hairline bg-panel-bright"
    >
      <div className="flex items-center gap-2 border-b hairline px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-faint/50" />
        <span className="h-2 w-2 rounded-full bg-faint/50" />
        <span className="h-2 w-2 rounded-full bg-faint/50" />
        <span className="ml-2 flex-1 truncate rounded-sm bg-void/60 px-2 py-0.5 font-mono text-[10px] text-ghost">
          {url}
        </span>
      </div>
      <div className="h-36">{children}</div>
    </div>
  );
}
