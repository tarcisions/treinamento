import { V5Hero as ThemeHero } from '@/components/theme/v5/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V5Experience as ThemeExperience } from '@/components/theme/v5/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v5 } from '@/themes/v4-v7'

export default function V5Page() {
  return (
    <PageShell theme={v5}>
      <ThemeHero />
      <ThemeManifesto theme={v5} />
      <ThemeCountdown theme={v5} />
      <ThemeExperience />
      <ThemeGallery theme={v5} />
      <ThemeVenue theme={v5} />
      <ThemeSpots theme={v5} />
      <ThemeTimeline theme={v5} />
      <ThemeFAQ theme={v5} />
      <ThemeFooter theme={v5} />
    </PageShell>
  )
}
