export const ProductTable = ({
  photosToView,
  columns,
  handleChangeSortingMethod,
  checkSortingMethod,
}) => (
  <div className="box table-container">
    {photosToView.length === 0 ? (
      <p data-cy="NoMatchingMessage">No photos matching selected criteria</p>
    ) : (
      <table className="table is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            {Object.keys(columns).map(key => (
              <th key={columns[key]}>
                <span className="is-flex is-flex-wrap-nowrap">
                  {columns[key]}
                  <a
                    href="#/"
                    onClick={() => handleChangeSortingMethod(columns[key])}
                  >
                    <span className="icon">
                      <i data-cy="SortIcon" className={`fas ${checkSortingMethod(columns[key])}`} />
                    </span>
                  </a>
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {photosToView.map(photo => (
            <tr key={photo.id}>
              <td className="has-text-weight-bold">{photo.id}</td>

              <td>{photo.title}</td>

              <td>{photo.album.title}</td>

              <td className={`${photo.user.sex === 'm' ? 'has-text-link' : 'has-text-danger'}`}>
                {photo.user.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);
