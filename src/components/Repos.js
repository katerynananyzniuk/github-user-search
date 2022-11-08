export const Repos = ({repos}) => (
  <>
    {repos.map(repo => (
      <div className="card mb-3" key={repo.id}>
        <div className="card-body">
          <h6>
            <a
              className="text-dark"
              href={repo.html_url} 
              target="_blanc"
              rel="noreferrer"
            >{repo.name}</a>
          </h6>
        </div>
      </div>
    ))}
  </>
)