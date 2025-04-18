// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type DeleteDeploymentRequest struct {
	// The ID of the deployment to be deleted
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// A Deployment or Alias URL. In case it is passed, the ID will be ignored
	URL *string `queryParam:"style=form,explode=true,name=url"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *DeleteDeploymentRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *DeleteDeploymentRequest) GetURL() *string {
	if o == nil {
		return nil
	}
	return o.URL
}

func (o *DeleteDeploymentRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *DeleteDeploymentRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// DeleteDeploymentState - A constant with the final state of the deployment.
type DeleteDeploymentState string

const (
	DeleteDeploymentStateDeleted DeleteDeploymentState = "DELETED"
)

func (e DeleteDeploymentState) ToPointer() *DeleteDeploymentState {
	return &e
}
func (e *DeleteDeploymentState) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DELETED":
		*e = DeleteDeploymentState(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteDeploymentState: %v", v)
	}
}

// DeleteDeploymentResponseBody - The deployment was successfully deleted
type DeleteDeploymentResponseBody struct {
	// The removed deployment ID.
	UID string `json:"uid"`
	// A constant with the final state of the deployment.
	State DeleteDeploymentState `json:"state"`
}

func (o *DeleteDeploymentResponseBody) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *DeleteDeploymentResponseBody) GetState() DeleteDeploymentState {
	if o == nil {
		return DeleteDeploymentState("")
	}
	return o.State
}

type DeleteDeploymentResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The deployment was successfully deleted
	Object *DeleteDeploymentResponseBody
}

func (o *DeleteDeploymentResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *DeleteDeploymentResponse) GetObject() *DeleteDeploymentResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
