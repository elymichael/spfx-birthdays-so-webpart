import * as React from 'react';
import styles from './HappyBirthday.module.scss';
import { IHappyBirthdayProps } from './IHappyBirthdayProps';
import { IHappbirthdayState } from './IHappybirthdayState';
import { escape } from '@microsoft/sp-lodash-subset';
import { IUser } from './IUser';
import HappyBirdthayCard from '../../controls/happyBirthdayCard/HappyBirthdayCard';
import * as moment from 'moment';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
import * as strings from 'ControlStrings';

export class HappyBirthday extends React.Component<IHappyBirthdayProps, IHappbirthdayState> {

  private _showBirthdays: boolean = true;
  constructor(props: IHappyBirthdayProps) {
    super(props);
    // this.props.users.push({ key: "enunez@dgcp.gob.do", userName: "Ely Michael Núñez De la Rosa", userEmail: "enunez@dgcp.gob.do", jobDescription: "Administrador de Sistemas", birthday: moment.utc("2000-10-16").local().format() });
    // this.props.users.push({ key: "pcuesta@dgcp.gob.do", userName: "Paola Estefanie Cuesta Gonzalez", userEmail: "pcuesta@dgcp.gob.do", jobDescription: "Abogada", birthday: moment.utc("2000-10-16").local().format() });
    // this.props.users.push({ key: "enunez@dgcp.gob.do", userName: "Ely Michael Núñez", userEmail: "enunez@dgcp.gob.do", jobDescription: "Administrador de Sistemas", birthday: moment.utc("2000-10-16").local().format() });
    // this.props.users.push({ key: "enunez@dgcp.gob.do", userName: "Ely Michael Núñez", userEmail: "enunez@dgcp.gob.do", jobDescription: "Administrador de Sistemas", birthday: moment.utc("2000-10-16").local().format() });
    // this.props.users.push({ key: "enunez@dgcp.gob.do", userName: "Ely Michael Núñez", userEmail: "enunez@dgcp.gob.do", jobDescription: "Administrador de Sistemas", birthday: moment.utc("2000-10-16").local().format() });

    console.log(props);
  }

  public async componentDidMount() {
  }

  public componentDidUpdate(prevProps: IHappyBirthdayProps, prevState: IHappbirthdayState): void {
  }

  //
  public render(): React.ReactElement<IHappyBirthdayProps> {
    return (
      <div className={styles.happyBirthday}>
        {
          this.props.users.map((user: IUser) => {
            return (
              <div className={styles.container}>
                <HappyBirdthayCard userName={user.userName}
                  jobDescription={user.jobDescription}
                  birthday={moment(user.birthday, ["MM-DD-YYYY", "YYYY-MM-DD", "DD/MM/YYYY", "MM/DD/YYYY"]).locale('es').format('DD MMMM')}
                  userEmail={user.userEmail}
                  imageTemplate={this.props.imageTemplate}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default HappyBirthday;
