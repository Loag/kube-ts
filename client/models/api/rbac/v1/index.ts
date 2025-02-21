/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createLabelSelectorFromDiscriminatorValue, createListMetaFromDiscriminatorValue, createObjectMetaFromDiscriminatorValue, serializeLabelSelector, serializeListMeta, serializeObjectMeta, type LabelSelector, type ListMeta, type ObjectMeta } from '../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface AggregationRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
     */
    clusterRoleSelectors?: LabelSelector[] | null;
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface ClusterRole extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
     */
    aggregationRule?: AggregationRule | null;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * Rules holds all the PolicyRules for this ClusterRole
     */
    rules?: PolicyRule[] | null;
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export interface ClusterRoleBinding extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * RoleRef contains information that points to the role being used
     */
    roleRef?: RoleRef | null;
    /**
     * Subjects holds references to the objects the role applies to.
     */
    subjects?: Subject[] | null;
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export interface ClusterRoleBindingList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Items is a list of ClusterRoleBindings
     */
    items?: ClusterRoleBinding[] | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    metadata?: ListMeta | null;
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export interface ClusterRoleList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Items is a list of ClusterRoles
     */
    items?: ClusterRole[] | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    metadata?: ListMeta | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AggregationRule}
 */
// @ts-ignore
export function createAggregationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAggregationRule;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ClusterRoleBinding}
 */
// @ts-ignore
export function createClusterRoleBindingFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoClusterRoleBinding;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ClusterRoleBindingList}
 */
// @ts-ignore
export function createClusterRoleBindingListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoClusterRoleBindingList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ClusterRole}
 */
// @ts-ignore
export function createClusterRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoClusterRole;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ClusterRoleList}
 */
// @ts-ignore
export function createClusterRoleListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoClusterRoleList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PolicyRule}
 */
// @ts-ignore
export function createPolicyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPolicyRule;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RoleBinding}
 */
// @ts-ignore
export function createRoleBindingFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRoleBinding;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RoleBindingList}
 */
// @ts-ignore
export function createRoleBindingListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRoleBindingList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Role}
 */
// @ts-ignore
export function createRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRole;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RoleList}
 */
// @ts-ignore
export function createRoleListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRoleList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RoleRef}
 */
// @ts-ignore
export function createRoleRefFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRoleRef;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Subject}
 */
// @ts-ignore
export function createSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSubject;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAggregationRule(aggregationRule: Partial<AggregationRule> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clusterRoleSelectors": n => { aggregationRule.clusterRoleSelectors = n.getCollectionOfObjectValues<LabelSelector>(createLabelSelectorFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoClusterRole(clusterRole: Partial<ClusterRole> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationRule": n => { clusterRole.aggregationRule = n.getObjectValue<AggregationRule>(createAggregationRuleFromDiscriminatorValue); },
        "apiVersion": n => { clusterRole.apiVersion = n.getStringValue(); },
        "kind": n => { clusterRole.kind = n.getStringValue(); },
        "metadata": n => { clusterRole.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "rules": n => { clusterRole.rules = n.getCollectionOfObjectValues<PolicyRule>(createPolicyRuleFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoClusterRoleBinding(clusterRoleBinding: Partial<ClusterRoleBinding> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { clusterRoleBinding.apiVersion = n.getStringValue(); },
        "kind": n => { clusterRoleBinding.kind = n.getStringValue(); },
        "metadata": n => { clusterRoleBinding.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "roleRef": n => { clusterRoleBinding.roleRef = n.getObjectValue<RoleRef>(createRoleRefFromDiscriminatorValue); },
        "subjects": n => { clusterRoleBinding.subjects = n.getCollectionOfObjectValues<Subject>(createSubjectFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoClusterRoleBindingList(clusterRoleBindingList: Partial<ClusterRoleBindingList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { clusterRoleBindingList.apiVersion = n.getStringValue(); },
        "items": n => { clusterRoleBindingList.items = n.getCollectionOfObjectValues<ClusterRoleBinding>(createClusterRoleBindingFromDiscriminatorValue); },
        "kind": n => { clusterRoleBindingList.kind = n.getStringValue(); },
        "metadata": n => { clusterRoleBindingList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoClusterRoleList(clusterRoleList: Partial<ClusterRoleList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { clusterRoleList.apiVersion = n.getStringValue(); },
        "items": n => { clusterRoleList.items = n.getCollectionOfObjectValues<ClusterRole>(createClusterRoleFromDiscriminatorValue); },
        "kind": n => { clusterRoleList.kind = n.getStringValue(); },
        "metadata": n => { clusterRoleList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoPolicyRule(policyRule: Partial<PolicyRule> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiGroups": n => { policyRule.apiGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "nonResourceURLs": n => { policyRule.nonResourceURLs = n.getCollectionOfPrimitiveValues<string>(); },
        "resourceNames": n => { policyRule.resourceNames = n.getCollectionOfPrimitiveValues<string>(); },
        "resources": n => { policyRule.resources = n.getCollectionOfPrimitiveValues<string>(); },
        "verbs": n => { policyRule.verbs = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRole(role: Partial<Role> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { role.apiVersion = n.getStringValue(); },
        "kind": n => { role.kind = n.getStringValue(); },
        "metadata": n => { role.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "rules": n => { role.rules = n.getCollectionOfObjectValues<PolicyRule>(createPolicyRuleFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRoleBinding(roleBinding: Partial<RoleBinding> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { roleBinding.apiVersion = n.getStringValue(); },
        "kind": n => { roleBinding.kind = n.getStringValue(); },
        "metadata": n => { roleBinding.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "roleRef": n => { roleBinding.roleRef = n.getObjectValue<RoleRef>(createRoleRefFromDiscriminatorValue); },
        "subjects": n => { roleBinding.subjects = n.getCollectionOfObjectValues<Subject>(createSubjectFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRoleBindingList(roleBindingList: Partial<RoleBindingList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { roleBindingList.apiVersion = n.getStringValue(); },
        "items": n => { roleBindingList.items = n.getCollectionOfObjectValues<RoleBinding>(createRoleBindingFromDiscriminatorValue); },
        "kind": n => { roleBindingList.kind = n.getStringValue(); },
        "metadata": n => { roleBindingList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRoleList(roleList: Partial<RoleList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { roleList.apiVersion = n.getStringValue(); },
        "items": n => { roleList.items = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
        "kind": n => { roleList.kind = n.getStringValue(); },
        "metadata": n => { roleList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRoleRef(roleRef: Partial<RoleRef> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiGroup": n => { roleRef.apiGroup = n.getStringValue(); },
        "kind": n => { roleRef.kind = n.getStringValue(); },
        "name": n => { roleRef.name = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSubject(subject: Partial<Subject> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiGroup": n => { subject.apiGroup = n.getStringValue(); },
        "kind": n => { subject.kind = n.getStringValue(); },
        "name": n => { subject.name = n.getStringValue(); },
        "namespace": n => { subject.namespace = n.getStringValue(); },
    }
}
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export interface PolicyRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. "" represents the core API group and "*" represents all API groups.
     */
    apiGroups?: string[] | null;
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
     */
    nonResourceURLs?: string[] | null;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     */
    resourceNames?: string[] | null;
    /**
     * Resources is a list of resources this rule applies to. '*' represents all resources.
     */
    resources?: string[] | null;
    /**
     * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
     */
    verbs?: string[] | null;
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export interface Role extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * Rules holds all the PolicyRules for this Role
     */
    rules?: PolicyRule[] | null;
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export interface RoleBinding extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * RoleRef contains information that points to the role being used
     */
    roleRef?: RoleRef | null;
    /**
     * Subjects holds references to the objects the role applies to.
     */
    subjects?: Subject[] | null;
}
/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface RoleBindingList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Items is a list of RoleBindings
     */
    items?: RoleBinding[] | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    metadata?: ListMeta | null;
}
/**
 * RoleList is a collection of Roles
 */
export interface RoleList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Items is a list of Roles
     */
    items?: Role[] | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    metadata?: ListMeta | null;
}
/**
 * RoleRef contains information that points to the role being used
 */
export interface RoleRef extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIGroup is the group for the resource being referenced
     */
    apiGroup?: string | null;
    /**
     * Kind is the type of resource being referenced
     */
    kind?: string | null;
    /**
     * Name is the name of resource being referenced
     */
    name?: string | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAggregationRule(writer: SerializationWriter, aggregationRule: Partial<AggregationRule> | undefined | null = {}) : void {
    if (aggregationRule) {
        writer.writeCollectionOfObjectValues<LabelSelector>("clusterRoleSelectors", aggregationRule.clusterRoleSelectors, serializeLabelSelector);
        writer.writeAdditionalData(aggregationRule.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeClusterRole(writer: SerializationWriter, clusterRole: Partial<ClusterRole> | undefined | null = {}) : void {
    if (clusterRole) {
        writer.writeObjectValue<AggregationRule>("aggregationRule", clusterRole.aggregationRule, serializeAggregationRule);
        writer.writeStringValue("apiVersion", clusterRole.apiVersion);
        writer.writeStringValue("kind", clusterRole.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", clusterRole.metadata, serializeObjectMeta);
        writer.writeCollectionOfObjectValues<PolicyRule>("rules", clusterRole.rules, serializePolicyRule);
        writer.writeAdditionalData(clusterRole.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeClusterRoleBinding(writer: SerializationWriter, clusterRoleBinding: Partial<ClusterRoleBinding> | undefined | null = {}) : void {
    if (clusterRoleBinding) {
        writer.writeStringValue("apiVersion", clusterRoleBinding.apiVersion);
        writer.writeStringValue("kind", clusterRoleBinding.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", clusterRoleBinding.metadata, serializeObjectMeta);
        writer.writeObjectValue<RoleRef>("roleRef", clusterRoleBinding.roleRef, serializeRoleRef);
        writer.writeCollectionOfObjectValues<Subject>("subjects", clusterRoleBinding.subjects, serializeSubject);
        writer.writeAdditionalData(clusterRoleBinding.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeClusterRoleBindingList(writer: SerializationWriter, clusterRoleBindingList: Partial<ClusterRoleBindingList> | undefined | null = {}) : void {
    if (clusterRoleBindingList) {
        writer.writeStringValue("apiVersion", clusterRoleBindingList.apiVersion);
        writer.writeCollectionOfObjectValues<ClusterRoleBinding>("items", clusterRoleBindingList.items, serializeClusterRoleBinding);
        writer.writeStringValue("kind", clusterRoleBindingList.kind);
        writer.writeObjectValue<ListMeta>("metadata", clusterRoleBindingList.metadata, serializeListMeta);
        writer.writeAdditionalData(clusterRoleBindingList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeClusterRoleList(writer: SerializationWriter, clusterRoleList: Partial<ClusterRoleList> | undefined | null = {}) : void {
    if (clusterRoleList) {
        writer.writeStringValue("apiVersion", clusterRoleList.apiVersion);
        writer.writeCollectionOfObjectValues<ClusterRole>("items", clusterRoleList.items, serializeClusterRole);
        writer.writeStringValue("kind", clusterRoleList.kind);
        writer.writeObjectValue<ListMeta>("metadata", clusterRoleList.metadata, serializeListMeta);
        writer.writeAdditionalData(clusterRoleList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializePolicyRule(writer: SerializationWriter, policyRule: Partial<PolicyRule> | undefined | null = {}) : void {
    if (policyRule) {
        writer.writeCollectionOfPrimitiveValues<string>("apiGroups", policyRule.apiGroups);
        writer.writeCollectionOfPrimitiveValues<string>("nonResourceURLs", policyRule.nonResourceURLs);
        writer.writeCollectionOfPrimitiveValues<string>("resourceNames", policyRule.resourceNames);
        writer.writeCollectionOfPrimitiveValues<string>("resources", policyRule.resources);
        writer.writeCollectionOfPrimitiveValues<string>("verbs", policyRule.verbs);
        writer.writeAdditionalData(policyRule.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRole(writer: SerializationWriter, role: Partial<Role> | undefined | null = {}) : void {
    if (role) {
        writer.writeStringValue("apiVersion", role.apiVersion);
        writer.writeStringValue("kind", role.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", role.metadata, serializeObjectMeta);
        writer.writeCollectionOfObjectValues<PolicyRule>("rules", role.rules, serializePolicyRule);
        writer.writeAdditionalData(role.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRoleBinding(writer: SerializationWriter, roleBinding: Partial<RoleBinding> | undefined | null = {}) : void {
    if (roleBinding) {
        writer.writeStringValue("apiVersion", roleBinding.apiVersion);
        writer.writeStringValue("kind", roleBinding.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", roleBinding.metadata, serializeObjectMeta);
        writer.writeObjectValue<RoleRef>("roleRef", roleBinding.roleRef, serializeRoleRef);
        writer.writeCollectionOfObjectValues<Subject>("subjects", roleBinding.subjects, serializeSubject);
        writer.writeAdditionalData(roleBinding.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRoleBindingList(writer: SerializationWriter, roleBindingList: Partial<RoleBindingList> | undefined | null = {}) : void {
    if (roleBindingList) {
        writer.writeStringValue("apiVersion", roleBindingList.apiVersion);
        writer.writeCollectionOfObjectValues<RoleBinding>("items", roleBindingList.items, serializeRoleBinding);
        writer.writeStringValue("kind", roleBindingList.kind);
        writer.writeObjectValue<ListMeta>("metadata", roleBindingList.metadata, serializeListMeta);
        writer.writeAdditionalData(roleBindingList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRoleList(writer: SerializationWriter, roleList: Partial<RoleList> | undefined | null = {}) : void {
    if (roleList) {
        writer.writeStringValue("apiVersion", roleList.apiVersion);
        writer.writeCollectionOfObjectValues<Role>("items", roleList.items, serializeRole);
        writer.writeStringValue("kind", roleList.kind);
        writer.writeObjectValue<ListMeta>("metadata", roleList.metadata, serializeListMeta);
        writer.writeAdditionalData(roleList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRoleRef(writer: SerializationWriter, roleRef: Partial<RoleRef> | undefined | null = {}) : void {
    if (roleRef) {
        writer.writeStringValue("apiGroup", roleRef.apiGroup);
        writer.writeStringValue("kind", roleRef.kind);
        writer.writeStringValue("name", roleRef.name);
        writer.writeAdditionalData(roleRef.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSubject(writer: SerializationWriter, subject: Partial<Subject> | undefined | null = {}) : void {
    if (subject) {
        writer.writeStringValue("apiGroup", subject.apiGroup);
        writer.writeStringValue("kind", subject.kind);
        writer.writeStringValue("name", subject.name);
        writer.writeStringValue("namespace", subject.namespace);
        writer.writeAdditionalData(subject.additionalData);
    }
}
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface Subject extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
     */
    apiGroup?: string | null;
    /**
     * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
     */
    kind?: string | null;
    /**
     * Name of the object being referenced.
     */
    name?: string | null;
    /**
     * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
     */
    namespace?: string | null;
}
/* tslint:enable */
/* eslint-enable */
