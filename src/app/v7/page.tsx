import { V7Hero as ThemeHero } from '@/components/theme/v7/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V7Experience as ThemeExperience } from '@/components/theme/v7/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v7 } from '@/themes/v4-v7'

export default function V7Page() {
  return (
    <PageShell theme={v7}>
      <ThemeHero />
      <ThemeManifesto theme={v7} />
      <ThemeCountdown theme={v7} />
      <ThemeExperience />
      <ThemeGallery theme={v7} />
      <ThemeVenue theme={v7} />
      <ThemeSpots theme={v7} />
      <ThemeTimeline theme={v7} />
      <ThemeFAQ theme={v7} />
      <ThemeFooter theme={v7} />
    </PageShell>
  )
}
