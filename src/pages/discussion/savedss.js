<>
              <span
                onClick={postVote}
                className="hover:text-blue-600 hover:underline cursor-pointer"
              >
                Vote
              </span>
              <Link
                to="/"
                className="hover:text-blue-600 hover:underline cursor-pointer"
              >
                Edit
              </Link>
              {/* {
            hide === true ? <span onClick={postHide}>Hide</span> : <span onClick={postShow}>Show</span>
          } */}
              <span
                onClick={postHide}
                className="hover:text-blue-600 hover:underline cursor-pointer"
              >
                Hide
              </span>
              <span
                onClick={postShow}
                className="hover:text-blue-600 hover:underline cursor-pointer"
              >
                Show
              </span>
              <span
                onClick={postAnswered}
                className="hover:text-blue-600 hover:underline cursor-pointer"
              >
                Answered
              </span>
              <span
                onClick={postNotAnswered}
                className="hover:text-blue-600 hover:underline cursor-pointer"
              >
                No answer
              </span>
            </>