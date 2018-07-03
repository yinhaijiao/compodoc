import { IHtmlEngineHelper } from './html-engine-helper.interface';
import { ConfigurationInterface } from '../../interfaces/configuration.interface';
import { FileEngine } from '../file.engine';

const I18N_DIR = __dirname + '/../src/templates/i18n/';

export class LocalesHelper implements IHtmlEngineHelper {
    private i18n: string = null;

    constructor(private configuration: ConfigurationInterface,
        private fileEngine: FileEngine = new FileEngine()) {
    }

    public helperFunc(context: any, text: string): string {
        if (!this.i18n) {
            this.i18n = this.fileEngine.getSync(`${I18N_DIR}${this.configuration.mainData.locales}.json`);
        }
        if (text) {
            return JSON.parse(this.i18n)[text.toLowerCase()];
        } else {
            return '';
        }
    }
}