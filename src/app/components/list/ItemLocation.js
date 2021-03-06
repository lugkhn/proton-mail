import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-components';
import { MAILBOX_LABEL_IDS, SHOW_MOVED } from 'proton-shared/lib/constants';
import { c } from 'ttag';

import { LABEL_IDS_TO_HUMAN } from '../../constants';

const { INBOX, TRASH, SPAM, ARCHIVE, SENT, DRAFTS } = MAILBOX_LABEL_IDS;

const getFolders = ({ ShowMoved }) => ({
    [INBOX]: {
        icon: 'inbox',
        name: c('Mailbox').t`Inbox`,
        to: '/inbox'
    },
    [TRASH]: {
        icon: 'trash',
        name: c('Mailbox').t`Trash`,
        to: '/trash'
    },
    [SPAM]: {
        icon: 'spam',
        name: c('Mailbox').t`Spam`,
        to: '/spam'
    },
    [ARCHIVE]: {
        icon: 'archive',
        name: c('Mailbox').t`Archive`,
        to: '/archive'
    },
    [SENT]: {
        icon: 'sent',
        name: c('Mailbox').t`Sent`,
        to:
            ShowMoved & SHOW_MOVED.SENT
                ? `/${LABEL_IDS_TO_HUMAN[MAILBOX_LABEL_IDS.ALL_SENT]}`
                : `/${LABEL_IDS_TO_HUMAN[MAILBOX_LABEL_IDS.SENT]}`
    },
    [DRAFTS]: {
        icon: 'drafts',
        name: c('Mailbox').t`Drafts`,
        to:
            ShowMoved & SHOW_MOVED.DRAFTS
                ? `/${LABEL_IDS_TO_HUMAN[MAILBOX_LABEL_IDS.ALL_DRAFTS]}`
                : `/${LABEL_IDS_TO_HUMAN[MAILBOX_LABEL_IDS.DRAFTS]}`
    }
});

const ItemLocation = ({ message, mailSettings }) => {
    const { LabelIDs = [] } = message;
    const folders = getFolders(mailSettings);

    return (
        <>
            {LabelIDs.filter((labelID) => folders[labelID]).map((labelID) => {
                const { icon, name, to } = folders[labelID];
                return (
                    <Link to={to} className="mr0-25 flex-item-noshrink" key={labelID} title={name}>
                        <Icon name={icon} />
                    </Link>
                );
            })}
        </>
    );
};

ItemLocation.propTypes = {
    message: PropTypes.object.isRequired,
    mailSettings: PropTypes.object.isRequired
};

export default ItemLocation;
