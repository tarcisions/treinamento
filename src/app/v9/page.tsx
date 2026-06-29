import { V9Hero as ThemeHero } from '@/components/theme/v9/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V9Experience as ThemeExperience } from '@/components/theme/v9/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v9 } from '@/themes/v8-v10'

export default function V9Page() {
  return (
    <PageShell theme={v9}>
      <ThemeHero />
      <ThemeManifesto theme={v9} />
      <ThemeCountdown theme={v9} />
      <ThemeExperience />
      <ThemeGallery theme={v9} />
      <ThemeVenue theme={v9} />
      <ThemeSpots theme={v9} />
      <ThemeTimeline theme={v9} />
      <ThemeFAQ theme={v9} />
      <ThemeFooter theme={v9} />
    </PageShell>
  )
}
