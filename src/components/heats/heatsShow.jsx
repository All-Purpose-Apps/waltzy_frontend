import { ArrayField, ReferenceArrayField, DateField, WithListContext, Show, SimpleShowLayout, TextField } from 'react-admin';

export const HeatShow = () => (
    <Show>
        <SimpleShowLayout>
            <DateField source="dateTime" showTime options={{
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }} />
            <ArrayField source="couples">
                <WithListContext render={({ data }) => {
                    return (
                        <ul>
                            {data.map(({ leader, follower, dance }, index) => (
                                <li key={index} style={{ listStyleType: 'none' }}>{leader.fullName} & {follower.fullName} dancing {dance.danceCategory.name} - {dance.title}</li>
                            ))}
                        </ul>
                    )
                }} />
            </ArrayField>
            <ArrayField source="couples" label="Competitions">
                <WithListContext render={({ data }) => {

                    function uniqueDanceCombinations(danceArray) {
                        const seenCombinations = new Set();

                        const uniqueArray = danceArray.filter(item => {
                            const combination = `${item.dance.title}-${item.dance.danceCategory.name}`;
                            if (seenCombinations.has(combination)) {
                                return false;
                            }

                            seenCombinations.add(combination);
                            return true;
                        });

                        return uniqueArray;
                    }

                    const uniqueArray = uniqueDanceCombinations(data);
                    return (
                        <ul>
                            {uniqueArray.map((item, index) => {
                                return (
                                    <li key={index} style={{ listStyleType: 'none' }}>{item.dance.danceCategory.name} - {item.dance.title}</li>
                                )
                            })}
                        </ul>
                    )
                }} />
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);