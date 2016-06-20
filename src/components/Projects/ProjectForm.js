import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';
import SelectInput from './../common/SelectInput';

const ProjectForm = ({project, employees, onSave, onChange, saving,  errors}) => {
    "use strict";
    employees = [];
    return (
      <form>
          <h1>Add Project Details</h1>
          <TextInput
              name="title"
              label="Title"
              value={project.title}
              onChange={onChange}
          />

          <SelectInput
              name="authorId"
              label="Author"
              value={project.authorId}
              defualtOption="Select Author"
              options={employees}
              onChange={onChange}
          />

          <TextInput
              name="category"
              label="Project"
              value={project.category}
              onChange={onChange}
          />

          <div className="form-group">
              <label htmlFor="comment">Summary</label>
              <textarea className="form-control"
                        rows="5"
                        name="summary"
                        value={project.summary}
                        onChange={onChange}>
              </textarea>
          </div>

          <input
              type="submit"
              disabled={saving}
              value={saving ? "saving..." : "Save"}
              onClick={onSave}
              className="btn btn-primary"
              />
      </form>
    );
};

ProjectForm.propTypes = {
    // project: PropTypes.object.isRequired,
    // allAuthors: PropTypes.array,
    // onSave: PropTypes.func.isRequired,
    // onChange: PropTypes.func.isRequired,
    // saving: PropTypes.func.bool,
    // errors: PropTypes.object
};

export default ProjectForm;