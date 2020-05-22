import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneChoiceGroup

} from "@microsoft/sp-property-pane";


import * as strings from 'BirthdaysWebPartStrings';
import Birthdays from './components/Birthdays';
import { IBirthdaysProps } from './components/IBirthdaysProps';
import { MSGraphClient } from '@microsoft/sp-http';

export interface IBirthdaysWebPartProps {
  title: string;
  numberUpcomingDays: number;
  template: any;
}


const imageTemplate: { imageUrl: string }[] =[{
  imageUrl: require('.../../../assets/cof-b.png')
},
{
  imageUrl: require('.../../../assets/cof5-b.png')
},
{
  imageUrl: require('.../../../assets/cof1-b.png')
},
{
  imageUrl: require('.../../../assets/cof3.png')
},
{
  imageUrl: require('.../../../assets/cof8-b.png')
},
{
  imageUrl: require('.../../../assets/baloons.png')
},
{
  imageUrl: require('.../../../assets/cof2.png')
},
{
  imageUrl: require('.../../../assets/cof10-b.png')
},
{
  imageUrl: require('.../../../assets/cof11-b.png')
},
{
  imageUrl: require('.../../../assets/cof12-b.png')
},
{
  imageUrl: require('.../../../assets/cof14-b.png')
},
{
  imageUrl: require('.../../../assets/cof14_1-b.png')
},
{
  imageUrl: require('.../../../assets/cof18-b.png')
},
{
  imageUrl: require('.../../../assets/cof17-b.png')
},
{
  imageUrl: require('.../../../assets/cof19-b.png')
},
{
  imageUrl: require('.../../../assets/cof20-b.png')
},
{
  imageUrl: require('.../../../assets/cof22-b.png')
},
{
  imageUrl: require('.../../../assets/cof24-b.png')
},
{
  imageUrl: require('.../../../assets/cof28-b.png')
},
{
  imageUrl: require('.../../../assets/cof29-b.png')
},
{
  imageUrl: require('.../../../assets/cof30-b.png')
},
{
  imageUrl: require('.../../../assets/cof31.png')
}
];

export default class BirthdaysWebPart extends BaseClientSideWebPart<IBirthdaysWebPartProps> {


  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
      // other init code may be present
    });
  }

  public render(): void {
    const element: React.ReactElement<IBirthdaysProps> = React.createElement(
      Birthdays,
      {
        title: this.properties.title,
        numberUpcomingDays: this.properties.numberUpcomingDays,
        context: this.context,
        displayMode: this.displayMode,
        imageTemplate: this.properties.template,
        updateProperty: (value: string) => {
          this.properties.title = value;
        }
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldNumber("numberUpcomingDays", {
                  key: "numberUpcomingDays",
                  label: strings.NumberUpComingDaysLabel,
                  description: strings.NumberUpComingDaysLabel,
                  value: this.properties.numberUpcomingDays,
                  maxValue: 10,
                  minValue: 5,
                  disabled: false
                }),
                PropertyPaneChoiceGroup('template', {
                  label: 'Background Image',
                  options: imageTemplate.map((image, i) => {
                    return (
                      {
                        text: `Image ${i}`, key: i,
                        imageSrc: image.imageUrl,
                        imageSize: { width: 80, height: 80 },
                        selectedImageSrc: image.imageUrl
                      }
                    );
                  })
                }
                )
              ]
            }
          ]
        }
      ]
    };
  }
}
