import { FormRow, FormRowSelect } from '../components'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice'

const SearchContainer = () => {
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
        useSelector((store) => store.allJobs)

    const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        if (isLoading) return
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(clearFilters())
    }

    return (
        <Wrapper>
            <form className="form">
                <h3>Search Form</h3>
                <div className="form-center">
                    {/* search position */}
                    <FormRow
                        type="text"
                        name="search"
                        value={search}
                        handleChange={handleSearch}
                    />
                    {/* search by status */}
                    <FormRowSelect
                        labelText="status"
                        name="searchStatus"
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={['all', ...statusOptions]}
                    />

                    {/* search by type*/}
                    <FormRowSelect
                        labelText="job type"
                        name="searchType"
                        value={searchType}
                        handleChange={handleSearch}
                        list={['all', ...jobTypeOptions]}
                    />
                    {/* sort */}
                    <FormRowSelect
                        name="sort"
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />
                    <button
                        // className="btn btn-block btn-danger"
                        className="btn btn-block "
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        Clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}
export default SearchContainer
