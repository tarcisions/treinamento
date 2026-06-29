import { V6Hero as ThemeHero } from '@/components/theme/v6/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V6Experience as ThemeExperience } from '@/components/theme/v6/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v6 } from '@/themes/v4-v7'

export default function V6Page() {
  return (
    <PageShell theme={v6}>
      <ThemeHero />
      <ThemeManifesto theme={v6} />
      <ThemeCountdown theme={v6} />
      <ThemeExperience />
      <ThemeGallery theme={v6} />
      <ThemeVenue theme={v6} />
      <ThemeSpots theme={v6} />
      <ThemeTimeline theme={v6} />
      <ThemeFAQ theme={v6} />
      <ThemeFooter theme={v6} />
    </PageShell>
  )
}
