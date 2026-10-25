import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { basePath, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <img src={`${basePath}/logo.png`} alt="" width={22} height={22} className="rounded" />
          bklink docs
        </span>
      ),
      url: '/',
    },
    links: [
      { text: 'bklink.uk', url: 'https://bklink.uk', external: true },
      { text: 'mxverify.uk', url: 'https://mxverify.uk', external: true },
      { text: 'Get an API key', url: 'https://bklink.uk/api-keys', external: true },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
