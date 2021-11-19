import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CategoryAComponent } from "./category-a/category-a.component";
import { CategoryBComponent } from "./category-b/category-b.component";
import { DynamicSubcategoryComponent } from "./dynamic-subcategory/dynamic-subcategory.component";
import { DynamicSubcategoryResolver } from 'dynamic-subcategory.resolver';
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: {
      breadcrumb: "Home"
    },
    children: [
      
      {
        path: "livros",
        component: CategoryAComponent,
        data: {
          breadcrumb: "Livros"
        },
        children: [
          {path: "ficcao-cientifica", component: CategoryAComponent,data: {breadcrumb: "Ficção Científica"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },
        {path: "fantasia", component: CategoryAComponent,data: {breadcrumb: "Fantasia"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },
        {path: "horror", component: CategoryAComponent,data: {breadcrumb: "Horror"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },
        {path: "misterio", component: CategoryAComponent,data: {breadcrumb: "Mistério"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },
        {path: "computacao-e-informatica", component: CategoryAComponent,data: {breadcrumb: "Computação e Informática"}, children:[
          {path: "programacao", component: CategoryAComponent,data: {breadcrumb: "Programação"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },
          {path: "design-grafico", component: CategoryAComponent,data: {breadcrumb: "Design Gráfico"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },
        ]
        },
        {path: "classicos", component: CategoryAComponent,data: {breadcrumb: "Clássicos"}, children:[
          {path: "literatura-brasileira", component: CategoryAComponent,data: {breadcrumb: "Literatura Brasileira"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            },
    
          ]
          },
          {path: "literatura-britanica", component: CategoryAComponent,data: {breadcrumb: "Literatura Britânica"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },
          {path: "literatura-russa", component: CategoryAComponent,data: {breadcrumb: "Literatura Russa"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },
          {path: "literatura-asiatica", component: CategoryAComponent,data: {breadcrumb: "Literatura Asiática"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },   
        ]
        },
        ]
      },
      {
        path: "historia-em-quadrinhos",
        component: CategoryBComponent,
        data: {
          breadcrumb: "História em Quadrinhos"
        },
        children: [
          {path: "DC", component: CategoryAComponent,data: {breadcrumb: "DC"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            },
            {path: "selo-vertigo", component: CategoryAComponent,data: {breadcrumb: "Selo Vertigo"}, children:[
              {
                path: ":subcategoryName",
                component: DynamicSubcategoryComponent,
                resolve: {
                  apiData: DynamicSubcategoryResolver
                }
              }
            ]
            },     
          ]
          },
          {path: "marvel", component: CategoryAComponent,data: {breadcrumb: "Marvel"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },
          {path: "graphic-novels", component: CategoryAComponent,data: {breadcrumb: "Graphic Novels"}, children:[
            {
              path: ":subcategoryName",
              component: DynamicSubcategoryComponent,
              resolve: {
                apiData: DynamicSubcategoryResolver
              }
            }
          ]
          },         
        ]
      },
      {path: "mangas", component: CategoryAComponent,data: {breadcrumb: "Mangás"}, children:[
        {path: "seinen", component: CategoryAComponent,data: {breadcrumb: "Seinen"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },
        {path: "shounen", component: CategoryAComponent,data: {breadcrumb: "Shounen"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },
        {path: "josei", component: CategoryAComponent,data: {breadcrumb: "Josei"}, children:[
          {
            path: ":subcategoryName",
            component: DynamicSubcategoryComponent,
            resolve: {
              apiData: DynamicSubcategoryResolver
            }
          }
        ]
        },             
      ]
      },    
    ]
  },
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
