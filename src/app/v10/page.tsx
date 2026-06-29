import { V10Hero as ThemeHero } from '@/components/theme/v10/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V10Experience as ThemeExperience } from '@/components/theme/v10/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v10 } from '@/themes/v8-v10'

export default function V10Page() {
  return (
    <PageShell theme={v10}>
      <ThemeHero />
      <ThemeManifesto theme={v10} />
      <ThemeCountdown theme={v10} />
      <ThemeExperience />
      <ThemeGallery theme={v10} />
      <ThemeVenue theme={v10} />
      <ThemeSpots theme={v10} />
      <ThemeTimeline theme={v10} />
      <ThemeFAQ theme={v10} />
      <ThemeFooter theme={v10} />
    </PageShell>
  )
}
