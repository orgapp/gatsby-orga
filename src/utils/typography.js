import Typography from 'typography'
import theme from 'typography-theme-github'
import CodePlugin from 'typography-plugin-code'

theme.baseFontSize = '14px'
theme.baseLineHeight = 1.45
theme.scaleRatio = 2.25
theme.plugins = [
  new CodePlugin(),
]
const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
