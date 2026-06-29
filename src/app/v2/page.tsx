import { V2Hero as ThemeHero } from '@/components/theme/v2/hero'
import { ThemeManifesto } from '@/components/theme/manifesto'
import { ThemeCountdown } from '@/components/theme/countdown'
import { V2Experience as ThemeExperience } from '@/components/theme/v2/experience'
import { ThemeGallery } from '@/components/theme/gallery'
import { ThemeVenue } from '@/components/theme/venue'
import { ThemeSpots } from '@/components/theme/spots'
import { ThemeTimeline } from '@/components/theme/timeline'
import { ThemeFAQ } from '@/components/theme/faq'
import { ThemeFooter } from '@/components/theme/footer'
import { PageShell } from '@/components/shared/page-shell'
import { v2 } from '@/themes/v1-v3'

export default function V2Page() {
  return (
    <PageShell theme={v2}>
      <ThemeHero />
      <ThemeManifesto theme={v2} />
      <ThemeCountdown theme={v2} />
      <ThemeExperience />
      <ThemeGallery theme={v2} />
      <ThemeVenue theme={v2} />
      <ThemeSpots theme={v2} />
      <ThemeTimeline theme={v2} />
      <ThemeFAQ theme={v2} />
      <ThemeFooter theme={v2} />
    </PageShell>
  )
}
