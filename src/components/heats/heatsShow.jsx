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
            <ArrayField source="competitions">
                <WithListContext render={({ data }) => {
                    function uniqueDanceCombinations(danceArray) {
                        const seenCombinations = new Set();

                        const uniqueArray = danceArray.filter(item => {
                            // Create a unique string key for each combination
                            const combination = `${item.dance.title}-${item.danceCategory.name}`;

                            // Check if this combination has already been seen
                            if (seenCombinations.has(combination)) {
                                return false; // Skip this item because it's a duplicate
                            }

                            // Otherwise, add it to the set and keep this item in the array
                            seenCombinations.add(combination);
                            return true;
                        });

                        return uniqueArray;
                    }

                    const uniqueDances = uniqueDanceCombinations(data);
                    return (
                        <ul>
                            {uniqueDances.map(({ danceCategory, dance }, index) => (
                                <li key={index} style={{ listStyleType: 'none' }}>{danceCategory.name} - {dance.title}</li>
                            ))}
                        </ul>
                    )
                }} />
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);