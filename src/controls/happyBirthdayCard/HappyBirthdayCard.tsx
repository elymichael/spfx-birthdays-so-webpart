import * as React from 'react';
import styles from './HappyBirthdayCard.module.scss';
import { IHappyBirthdayCardProps } from './IHappyBirthdayCardProps';
import { IHappyBirthdayCardPState } from './IHappyBirthdayCardState';
import { escape } from '@microsoft/sp-lodash-subset';
import { IPersonaSharedProps, Persona, PersonaSize, IPersonaProps, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
import * as strings from 'ControlStrings';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as moment from 'moment';
import {
  DocumentCardActions,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { UrlQueryParameterCollection } from '@microsoft/sp-core-library';
const img: string = require('../../../assets/cof11.png');

const IMG_WIDTH: number = 300;
const IMG_HEIGTH: number = 190;

const imageTemplate: { imageUrl: string }[] = [{
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


export class HappyBirthdayCard extends React.Component<IHappyBirthdayCardProps, IHappyBirthdayCardPState> {
  private _Persona: IPersonaSharedProps;
  private _birthdayMsg: string = '';

  constructor(props: IHappyBirthdayCardProps) {
    super(props);
    const photo: string = `/_layouts/15/userphoto.aspx?size=L&username=${this.props.userEmail}`;
    console.log(photo);
    this._Persona = {
      imageUrl: photo ? photo : ''
    };

    this.state = {
      isBirthdayToday: this._birthdayIsToday(this.props.birthday)
    };

    this._onRenderTertiaryText = this._onRenderTertiaryText.bind(this);
    this._getInitial = this._getInitial.bind(this);
    this._birthdayIsToday = this._birthdayIsToday.bind(this);
  }
  // Render
  public render(): React.ReactElement<IHappyBirthdayCardProps> {
    this._birthdayMsg = this.state.isBirthdayToday ? strings.HappyBirthdayMsg : strings.NextBirthdayMsg;
    return (
      <div className={styles.happyBirdthay}>
        <div className={styles.documentCardWrapper}>
          <div className={styles.documentCard}>
            <div className={styles.firstblock}>
              <div className={styles.backgroundimage} style={{ backgroundImage: "url(" + imageTemplate[this.props.imageTemplate].imageUrl + ")" }}>
                <Persona
                  {...this._Persona}
                  size={PersonaSize.large}
                  className={styles.persona}
                  onRenderTertiaryText={this._onRenderWhiteText}
                />
              </div>
            </div>
            <div className={styles.secondblock}>
              <label className={styles.label}>{this.props.birthday}</label>
            </div>
            <div className={styles.thirdblock}>
              <div>
                <div className={styles.labelname}>&#9679; {this.props.userName} &#9679;</div>                
                <label className={styles.labelposition}>{this.props.jobDescription}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  // Today is Birthday ?
  private _birthdayIsToday(birthday: string): boolean {
    const _todayDay = moment().date();
    const _todayMonth = moment().month() + 1;
    const _birthdayDay = moment(birthday, 'Do MMM').date();
    const _birthdayMonth = moment(birthday, 'Do MMM').month() + 1;

    const _retvalue = (_todayDay === _birthdayDay && _todayMonth === _birthdayMonth) ? true : false;

    return _retvalue;
  }
  // Get Initials
  private _getInitial(userName: string): string {
    const _arr = userName.split(' ');
    const _initial = _arr[0].charAt(0).toUpperCase() + (_arr[1] ? _arr[1].charAt(0).toLocaleUpperCase() : "");
    return _initial;
  }
  // Render tertiary text
  private _onRenderTertiaryText = (props: IPersonaProps): JSX.Element => {
    return (
      <div>
        <span className='ms-fontWeight-semibold' style={{ color: '#71afe5' }}>
          {props.tertiaryText}</span>
      </div>
    );
  }

  private _onRenderWhiteText = (props: IPersonaProps): JSX.Element => {
    return (
      <div>
        <span className='ms-fontWeight-semibold' style={{ color: '#ffffff' }}>
          {props.tertiaryText}</span>
      </div>
    );
  }
}
export default HappyBirthdayCard;
