import { CDSThemeProvider } from '@ciscodesignsystems/cds-react-theme-provider'
import { CDSCollapse } from '@ciscodesignsystems/cds-react-collapse'
import { CDSTag } from '@ciscodesignsystems/cds-react-tag'
import './App.css'

const newItems = [
  { name: 'Device Health Check v2', tag: 'Preview', color: 'accentA' },
  { name: 'Bulk User Management Actions', tag: 'Preview', color: 'accentA' },
  { name: 'AI-Powered Policy Suggestions', tag: 'Updated', color: 'accentE' },
]

const comingItems = [
  { name: 'Passkey Authentication', tag: 'Q3 2026', color: 'accentC' },
  { name: 'Adaptive Access Policies', tag: 'Q3 2026', color: 'accentC' },
  { name: 'SCIM 2.0 Group Provisioning', tag: 'Q4 2026', color: 'accentC' },
]

function UpdateItem({ name, tag, color, dotColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
        backgroundColor: dotColor,
      }} />
      <span style={{ flex: 1, fontSize: 13 }}>{name}</span>
      <CDSTag.Colored color={color} size="sm">{tag}</CDSTag.Colored>
    </div>
  )
}

export default function App() {
  return (
    <CDSThemeProvider brand="onecd" theme="light">
      <div style={{ maxWidth: 640, margin: '48px auto', padding: '0 24px' }}>
        <p style={{ fontSize: 13, color: 'var(--cds-color-neutral-text-subtle)', marginBottom: 12 }}>
          Manage beta and experimental features for your organization.
        </p>

        <CDSCollapse kind="stacked">
          <CDSCollapse.Heading>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cds-color-brand-primary-icon-default)" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              What's new &amp; coming up
              <span style={{ fontSize: 12, color: 'var(--cds-color-neutral-text-subtle)', fontWeight: 400 }}>
                3 updates · 3 upcoming
              </span>
            </span>
          </CDSCollapse.Heading>
          <CDSCollapse.Panel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: '4px 0' }}>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, fontSize: 12, fontWeight: 600, color: 'var(--cds-color-neutral-text-default)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--cds-color-brand-primary-icon-default)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  What's new
                </div>
                {newItems.map(item => (
                  <UpdateItem key={item.name} {...item} dotColor="var(--cds-color-brand-primary-icon-default)" />
                ))}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, fontSize: 12, fontWeight: 600, color: 'var(--cds-color-neutral-text-default)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--cds-color-status-warning-icon-default)">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                  Coming soon
                </div>
                {comingItems.map(item => (
                  <UpdateItem key={item.name} {...item} dotColor="var(--cds-color-status-warning-icon-default)" />
                ))}
              </div>

            </div>
          </CDSCollapse.Panel>
        </CDSCollapse>
      </div>
    </CDSThemeProvider>
  )
}
