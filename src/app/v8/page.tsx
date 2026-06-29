import { V8Hero as ThemeHero } from '@/components/theme/v8/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V8Experience as ThemeExperience } from '@/components/theme/v8/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v8 } from '@/themes/v8-v10'

export default function V8Page() {
  return (
    <PageShell theme={v8}>
      <ThemeHero />
      <ThemeManifesto theme={v8} />
      <ThemeCountdown theme={v8} />
      <ThemeExperience />
      <ThemeGallery theme={v8} />
      <ThemeVenue theme={v8} />
      <ThemeSpots theme={v8} />
      <ThemeTimeline theme={v8} />
      <ThemeFAQ theme={v8} />
      <ThemeFooter theme={v8} />
    </PageShell>
  )
}
