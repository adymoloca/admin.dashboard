import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import DropdownCard from 'ui-component/cards/DropdownCard';
import HeaderContent from './appliersComponents/HeaderContent';
import CollapsedContent from './appliersComponents/CollapsedContent';
import { clearAppliers } from 'store/types/appliersTypes';
import { getAppliers } from 'store/actions/appliersActions';
import moment from 'moment';

const Appliers = () => {
    const dispatch = useDispatch();
    const appliers = useSelector((state) => state.appliersState?.appliers);

    useEffect(() => {
        dispatch(getAppliers());
        return () => dispatch(clearAppliers());
    }, [dispatch]);

    return (
        <MainCard>
            {appliers.map((applier) => (
                <DropdownCard
                    key={applier?._id}
                    headerContent={
                        <HeaderContent
                            pending={applier?.pending}
                            accepted={applier?.accepted}
                            name={applier?.name}
                            email={applier?.email}
                            id={applier?._id}
                            date={moment(applier?.createdAt).format('ll')}
                        />
                    }
                    collapsedContent={<CollapsedContent data={applier} />}
                />
            ))}
        </MainCard>
    );
};
export default Appliers;
