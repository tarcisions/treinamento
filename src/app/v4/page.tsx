import { V4Hero as ThemeHero } from '@/components/theme/v4/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V4Experience as ThemeExperience } from '@/components/theme/v4/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v4 } from '@/themes/v4-v7'

export default function V4Page() {
  return (
    <PageShell theme={v4}>
      <ThemeHero />
      <ThemeManifesto theme={v4} />
      <ThemeCountdown theme={v4} />
      <ThemeExperience />
      <ThemeGallery theme={v4} />
      <ThemeVenue theme={v4} />
      <ThemeSpots theme={v4} />
      <ThemeTimeline theme={v4} />
      <ThemeFAQ theme={v4} />
      <ThemeFooter theme={v4} />
    </PageShell>
  )
}
