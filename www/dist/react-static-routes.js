
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages_Home from '/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/Home'
import _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages_Changelog from '/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/Changelog'
import _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages_Docs from '/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/Docs'
import _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages____ from '/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/404'
    const templateMap = {
    t_0: _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages_Home,
t_1: _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages_Changelog,
t_2: _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages_Docs,
t_3: _Users_lucianbuzzo_projects_fin_site_node_modules_landr_dist_themes_landr_theme_resin_pages____
  }
    const templateTree = {c:{"404":{t:"t_3"},"/":{t:"t_0"},"changelog":{t:"t_1"},"docs":{t:"t_2"}}}
    
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
  

    export const paths = [{"path":"/","title":"Home","component":"/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/Home","hasGetProps":false},{"path":"/changelog","title":"Changelog","component":"/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/Changelog","hasGetProps":false},{"component":"/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/Docs","title":"Docs","path":"/docs","hasGetProps":false},{"is404":true,"path":"/404","component":"/Users/lucianbuzzo/projects/fin-site/node_modules/landr/dist/themes/landr-theme-resin/pages/404","hasGetProps":false}]

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
  