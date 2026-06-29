import { ThemeHero } from '@/components/theme/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { ThemeExperience } from '@/components/theme/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v3 } from '@/themes/v1-v3'

export default function V3Page() {
  return (
    <PageShell theme={v3}>
      <ThemeHero theme={v3} />
      <ThemeManifesto theme={v3} />
      <ThemeCountdown theme={v3} />
      <ThemeExperience theme={v3} />
      <ThemeGallery theme={v3} />
      <ThemeVenue theme={v3} />
      <ThemeSpots theme={v3} />
      <ThemeTimeline theme={v3} />
      <ThemeFAQ theme={v3} />
      <ThemeFooter theme={v3} />
    </PageShell>
  )
}
