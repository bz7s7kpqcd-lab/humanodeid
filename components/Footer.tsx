import { Fingerprint, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ink-600/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30">
                <Fingerprint size={15} />
              </span>
              <span className="font-display font-semibold text-slate-100">
                HumanodeID
              </span>
            </div>
            <p className="max-w-[220px] text-sm text-slate-500">
              Verification infrastructure for trusted applications.
            </p>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-600">
              Product
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#features" className="transition-colors hover:text-slate-100">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-slate-100">
                  FAQ
                </a>
              </li>
              <li>
                <span className="text-slate-600">Documentation (Coming Soon)</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-600">
              Legal
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-slate-100">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-slate-100">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-600">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2 text-slate-600">
                <Github size={14} /> GitHub (Coming Soon)
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-slate-100">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-ink-600/70 pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} HumanodeID. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
