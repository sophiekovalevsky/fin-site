
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Home from '/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Home'
import _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Doc from '/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Doc'
import _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Docs from '/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Docs'
import _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages____ from '/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/404'
    const templateMap = {
    t_0: _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Home,
t_1: _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Doc,
t_2: _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages_Docs,
t_3: _Users_dnlytras_Documents_Projects_fin_site_theme_landr_theme_fin_pages____
  }
    const templateTree = {c:{"404":{t:"t_3"},"/":{t:"t_0"},"docs":{c:{"developers":{t:"t_1"},"embedding":{t:"t_1"},"getting-started":{t:"t_1"},"index":{t:"t_1"},"port":{t:"t_1"}},t:"t_2"}}}
    
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
  

    export const paths = [{"path":"/","title":"Home","component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Home","hasGetProps":false},{"component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Doc","title":"Developers","path":"/docs/developers","hasGetProps":false},{"component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Doc","title":"Embedding","path":"/docs/embedding","hasGetProps":false},{"component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Doc","title":"Getting started","path":"/docs/getting-started","hasGetProps":false},{"component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Doc","title":"Index","path":"/docs/index","hasGetProps":false},{"component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Doc","title":"Port","path":"/docs/port","hasGetProps":false},{"component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/Docs","title":"Docs","path":"/docs","hasGetProps":false},{"is404":true,"path":"/404","component":"/Users/dnlytras/Documents/Projects/fin-site/theme/landr-theme-fin/pages/404","hasGetProps":false}]

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
  