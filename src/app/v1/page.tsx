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
import { v1 } from '@/themes/v1-v3'

export default function V1Page() {
  return (
    <PageShell theme={v1}>
      <ThemeHero theme={v1} />
      <ThemeManifesto theme={v1} />
      <ThemeCountdown theme={v1} />
      <ThemeExperience theme={v1} />
      <ThemeGallery theme={v1} />
      <ThemeVenue theme={v1} />
      <ThemeSpots theme={v1} />
      <ThemeTimeline theme={v1} />
      <ThemeFAQ theme={v1} />
      <ThemeFooter theme={v1} />
    </PageShell>
  )
}
