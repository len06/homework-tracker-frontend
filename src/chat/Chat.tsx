import React, { useCallback } from 'react';
import { Session, Chatbox } from '@talkjs/react';
import Talk from 'talkjs'
// import { StreamChat } from 'stream-chat';
// import {Chat,Channel,ChannelList,Window,ChannelHeader, useCreateChatClient} from 'stream-chat-react';
// import {Cookie} from 'universal-cookie';
import ChannelContainer from './ChannelContainer'
//require('dotenv').config();

// const apiKey = process.env.REACT_STREAM_API_KEY as string;
// const client = StreamChat.getInstance(apiKey);

// function ChatBlock(){
    
//     return(
//         <Chat client={client} theme='str-chat_theme-dark'>
//             <ChannelContainer />
//         </Chat>
//     )
// }

function Chat(){

    const syncUser = useCallback(() => 
            new Talk.User({
                id: 'nina',
                name: 'Nina',
                email: 'nina@example.com',
                photoUrl: 'https://talkjs.com/new-web/avatar-7.jpg',
                welcomeMessage:'Hi!'
            }),[]
    );

    const syncConversation = useCallback((session : Talk.Session) => {
            const conversation = session.getOrCreateConversation('new_group_chat');

            const frank = new Talk.User({
                id: 'frank',
                name: 'Frank',
                email: 'frank@example.com',
                photoUrl: 'https://talkjs.com/new-web/avatar-8.jpg',
                welcomeMessage: 'Hey, how can I help?',
            });

            const juliana = new Talk.User({
                id: 'juliana',
                name: 'Juliana',
                email: 'juliana@example.com',
                photoUrl: 'https://talkjs.com/new-web/avatar-1.jpg',
                welcomeMessage: 'Hey, how can I help?',
            });

            conversation.setParticipant(session.me);
            conversation.setParticipant(frank);
            conversation.setParticipant(juliana);

            return conversation;
    }, []);
    return <Session appId="tF1SoiPf" userId='sample_user_alice'>
        <Chatbox syncConversation={syncConversation} style={{width:'100%', height:'500px'}}/>
    </Session> 
}

export default Chat

