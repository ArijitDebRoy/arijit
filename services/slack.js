import axios from 'axios';
import env from '../env';

const SlackWebHook = {

    /**
     * send error log to slack
     * @author: Arijit Deb Roy
     * @params: page name, func name and error message
     */

    sendSlackMessage(page, func, error, slackUrl = env.SLACK_URL, username = "errorBotPartner", channel = env.SLACK_CHANNEL, icon_emoji = ":scream:"){
        let text = `${page}-${func}-${error}`;
        let message =  JSON.stringify({text, channel, username, icon_emoji});

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        return axios.post(`${slackUrl}`, message, config)
            .then(res => res.data)
            .catch(error => error);

    }

}

export default SlackWebHook;