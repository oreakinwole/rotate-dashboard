export interface VulnerabilityData {
  id: string
  title: string
  description: string
  extra: string
  details: Array<{
    label: string
    value: string
  }>
  networkNodes: Array<{
    id: string
    label: string
    type: "primary" | "secondary" | "tertiary"
    x: number
    y: number
    connections: string[]
  }>
  assets: Array<{
    id: string
    name: string
    version: string
    riskLevel: "Critical" | "High" | "Medium" | "Low"
  }>
  riskMetrics: {
    critical: number
    high: number
    medium: number
    low: number
  }
}

export interface NavigationItem {
  id: string
  label: string
  icon: string
  isActive?: boolean
}

export const mockVulnerabilityData: VulnerabilityData = {
  id: "CVE-2024-6387",
  title: "CVE-2024-6387",
  description:
    "Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.",
  extra:
    "Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate vitae in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.",
  details: [
    { label: "Lorem Ipsum Dolor", value: "10/19/2017" },
    { label: "Lorem Ipsum Dolor", value: "Ut" },
    { label: "Lorem Ipsum Dolor", value: "Eros" },
    { label: "Lorem Ipsum Dolor", value: "Yes" },
    { label: "Lorem Ipsum Dolor", value: "Sit" },
    { label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
    { label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
    { label: "Lorem Ipsum Dolor Sit", value: "" },
  ],
  networkNodes: [
    { id: "1", label: "Lorem Lorem Lorem", type: "primary", x: 50, y: 10, connections: ["2", "3", "4"] },
    { id: "2", label: "Loremipsum", type: "secondary", x: 20, y: 40, connections: ["5"] },
    { id: "3", label: "Loremipsu", type: "secondary", x: 50, y: 40, connections: ["5"] },
    { id: "4", label: "Loremipsu", type: "secondary", x: 80, y: 40, connections: ["5"] },
    { id: "5", label: "Loremipsumdolorsit", type: "tertiary", x: 80, y: 70, connections: ["6"] },
    { id: "6", label: "Loremipsumdolorsit002", type: "tertiary", x: 80, y: 90, connections: [] },
  ],
  assets: [
    { id: "1", name: "Loremipsumdolorsit", version: "192.168.1.1", riskLevel: "Critical" },
    { id: "2", name: "Loremipsumdolorsit002", version: "192.168.1.2", riskLevel: "Critical" },
  ],
  riskMetrics: {
    critical: 2,
    high: 0,
    medium: 0,
    low: 0,
  },
}

export const mockNavigationItems: NavigationItem[] = [
  { id: "1", label: "Lorem", icon: "grid", isActive: false },
  { id: "2", label: "Lorem", icon: "warning", isActive: false },
  { id: "3", label: "Lorem", icon: "shield", isActive: false },
  { id: "4", label: "Lorem", icon: "crosshairs", isActive: true },
  { id: "5", label: "Lorem", icon: "rocket", isActive: false },
  { id: "6", label: "Lorem", icon: "document", isActive: false },
  { id: "7", label: "Lorem", icon: "snowflake", isActive: false },
  { id: "8", label: "Lorem", icon: "settings", isActive: false },
  { id: "9", label: "Lorem", icon: "stack", isActive: false },
]

// Mock API functions
export const fetchVulnerabilityData = async (): Promise<VulnerabilityData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
  return mockVulnerabilityData
}

export const fetchNavigationItems = async (): Promise<NavigationItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockNavigationItems
}
