import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenu, DropdownMenuButton, Icon } from 'react-components';
import { c } from 'ttag';

import ToolbarDropdown from './ToolbarDropdown';

const FilterDropdown = ({ loading, onFilter }) => {
    return (
        <ToolbarDropdown content={<Icon className="toolbar-icon" name="bullet-points" />}>
            <DropdownMenu>
                <DropdownMenuButton className="alignleft" loading={loading} onClick={() => onFilter()}>
                    <Icon name="bullet-points" className="mr0-5" />
                    {c('Action').t`Show all`}
                </DropdownMenuButton>
                <DropdownMenuButton className="alignleft" loading={loading} onClick={() => onFilter()}>
                    <Icon name="unread" className="mr0-5" />
                    {c('Action').t`Show unread`}
                </DropdownMenuButton>
                <DropdownMenuButton className="alignleft" loading={loading} onClick={() => onFilter()}>
                    <Icon name="read" className="mr0-5" />
                    {c('Action').t`Show read`}
                </DropdownMenuButton>
            </DropdownMenu>
        </ToolbarDropdown>
    );
};

FilterDropdown.propTypes = {
    loading: PropTypes.bool,
    onFilter: PropTypes.func.isRequired
};

export default FilterDropdown;
