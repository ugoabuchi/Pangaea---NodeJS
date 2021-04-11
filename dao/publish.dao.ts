import {CreatePublishDto} from '../dto/create.publish.dto'
import debug from 'debug';

class PublishDao{

    publish: Array<CreatePublishDto> = [];
    log: debug.IDebugger = debug('app:in-memory-dao');

    async publishContent(content: CreatePublishDto){

        this.publish.push(content);
        return {
            topic: content.topic,
            data: content.data
        };
    }

    async getPublishedContents() {
        return this.publish;
    }

    async getPublishedContentById(subId: string) {
        return this.publish.find((content: { topic: string }) => content.topic === subId);
    }

    async getSubPublishContentByIdAll(subId: string) {
        return this.publish.filter((content: { topic: string }) => content.topic === subId);
    }


    async removePublishedContentById(subId: string) {
        const objIndex = this.publish.findIndex(
            (obj: { topic: string }) => obj.topic === subId
        );
        this.publish.splice(objIndex, 1);
        return {
            status: `${subId} removed`
        };
    }


}

export default new PublishDao();