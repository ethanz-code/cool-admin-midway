import * as sms_ali from './sms-ali';
import * as sms_tx from './sms-tx';
import { BaseUpload, MODETYPE } from './upload';
type AnyString = string & {};
/**
 * 插件类型声明
 */
interface PluginMap {
  upload: BaseUpload;
  'sms-tx': sms_tx.CoolPlugin;
  'sms-ali': sms_ali.CoolPlugin;
}
