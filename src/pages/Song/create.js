import { AutoComplete, Button, Input, InputGroup } from '../../components'

const CreateSong = ({ history }) =>
{
    const catalogs = [
        {
            id: 1,
            title: 'Album 1'
        },
        {
            id: 2,
            title: 'Single 1'
        },
        {
            id: 3,
            title: 'Extended Play 1'
        },
    ]

    return (
        <div className="bg-white p-6 rounded-[10px] drop-shadow-[0_3px_5px_rgba(128,128,128,0.15)]">
            <form>
                <InputGroup className="mb-5" label="Title" labelFor="song_title">
                    <Input
                        type="text"
                        placeholder="Enter song title"
                        name="song_title"
                        id="song_title"
                    />
                </InputGroup>
                <InputGroup className="mb-5" label="Track No." labelFor="track_no">
                    <Input
                        type="number"
                        min="1"
                        placeholder="Enter song track number"
                        name="track_no"
                        id="track_no"
                    />
                </InputGroup>
                <InputGroup className="mb-5" label="Duration" labelFor="minutes">
                    <div className="flex">
                        <Input
                            type="number"
                            min="0"
                            max="59"
                            placeholder="Minutes"
                            name="minutes"
                            id="minutes"
                        />
                        <span className="mx-2 flex items-center text-[#555555] text-sm">:</span>
                        <Input
                            type="number"
                            min="0"
                            max="59"
                            placeholder="Seconds"
                            name="seconds"
                            id="seconds"
                        />
                    </div>
                </InputGroup>
                <InputGroup className="mb-5" label="Catalog (Album, Single, or EP)" labelFor="catalog">
                    <AutoComplete
                        suggestions={catalogs}
                        suggestionObjectKey="title"
                        placeholder="Enter catalog name and select the catalog from suggestions"
                        onSelect={value => console.log('Selected data:', value)}
                        emptyDataMessage="No suggestions. Before submitting song data please add the catalog data first on Catalogs menu."
                        name="catalog"
                        id="catalog"
                    />
                </InputGroup>
                <InputGroup className="mb-9" label="Release Date" labelFor="release_date">
                    <Input
                        type="date"
                        placeholder="Enter song release date"
                        name="release_date"
                        id="release_date"
                    />
                </InputGroup>
                <div className="flex">
                    <Button
                        className="mr-[10px]"
                        type="button"
                        variant="outlined"
                        onClick={() => history.replace('/panel/songs')}
                    >
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateSong