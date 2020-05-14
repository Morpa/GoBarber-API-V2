import INotificationDTO from '../dtos/INotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(data: INotificationDTO): Promise<Notification>;
}
