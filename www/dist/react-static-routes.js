
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Home from '/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Home'
import _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages____ from '/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/404'
    const templateMap = {
    t_0: _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Home,
t_1: _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages____
  }
    const templateTree = {c:{"404":{t:"t_1"},"/":{t:"t_0"}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export const paths = [{"path":"/","title":"Home","component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Home","hasGetProps":false},{"is404":true,"path":"/404","component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/404","hasGetProps":false}]

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return <Template {...props} />
    }} />
  
        )
      }
    }
  