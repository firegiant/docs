---
title: Expression Syntax
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 2
---

We've already used conditional expressions, among others, in `Condition` and `Publish` tags. We are already aware of logical operators like `NOT`, `AND`, `OR` or comparisons like `<`, `>`, `=`. To have them all described, here they are in order of precedence:

## Logical operators

* NOT
    Prefix unary operator; inverts state of following term.
* AND
    Logical AND
* OR
    logical OR
* XOR
    exclusive OR
* EQV
    equivalence
* IMP
    implication

## Comparative operators

* =
    equal
* \<>
    not equal
* \>
    greater than
* \>=
    greater than or equal
* \<
    less than
* \<=
    less than or equal
* ~=
    equal, case insensitive
* ~<>
    not equal, case insensitive
* ~>
    greater than, case insensitive
* ~>=
    greater than or equal, case insensitive
* ~<
    less than, case insensitive
* ~<=
    less than or equal, case insensitive

## Substring operators, only between strings

* \><
    _left_ contains _right
* \<<
    _left_ starts with _right
* \>>
    _left_ ends with _right

## Bitwise operators, only between integers

* \><
    bitwise AND
* \<<
    high 16-bits of _left_ equal to _right
* \>>
    low 16-bits of _left_ equal to _right

Note that---as usual in XML---you have to be cautious when you use angle brackets that can be mistaken for an opening or closing character of an XML tag. To avoid confusion, you should use XML's [character data mechanism](https://www.w3.org/TR/REC-xml/#sec-cdata-sect) to escape these conditions: Wrap conditional expressions with `<![CDATA[` and `]]>`:

    <![CDATA[IAgree <> "Yes"]]>

The safest approach would be to wrap everything (this is what the WiX decompiler, Dark, does) but---at least in my humble opinion---this makes the source far too illegible. Or, you have to take care of which expressions are misleading and which are not (the compiler will give an error message if it doesn't understand something) and only use the wrapper where really necessary. It's your choice.

## Properties in expressions

In these expressions, you can use property names (remember that they are case sensitive). Non-existent property names will be treated as empty strings. The logical value of a property reflects whether it has been set---meaning that you <em>cannot</em> check for a logical value by simply using the property:

* PROPERTY
    This will evaluate to _true_ if the property has been set and has _any_ value, even if this value is false or 0.
* NOT PROPERTY
    This will evaluate to _true_ if the property has not been set at all.

## Prefixes

Prepending some special characters to the names will give them extra meaning:

* %
    environment variable (name is case insensitive)
* $
    action state of component
* ?
    installed state of component
* &
    action state of feature
* !
    installed state of feature

The last four can return the following integer values:

* -1
    no action to be taken
* 1
    advertised (only for features)
* 2
    not present
* 3
    on the local computer
* 4
    run from the source

A few examples to make things clearer:

* `(&FeatureName = 3) AND NOT (!FeatureName = 3)`
    Run action only if the product will be installed locally. Do not run action on a reinstallation.
    The term `&FeatureName = 3` means the action is to install the feature locally.
    The term `NOT (!FeatureName = 3)` means the feature is not installed locally.
* `(&FeatureName = 2) AND (!FeatureName = 3)`
    Run action only if the feature will be uninstalled.
    This condition only checks for a transition of the feature from an installed state of local to the absent state.
* `(?ComponentName = 3) AND ($ComponentName = 2 OR $ComponentName = 4)`
    Run action only if the component was installed locally, but is transitioning out of state.
    The term `?ComponentName = 3` means the component is installed locally.
    The term `$ComponentName = 2` means that the action state on the component is absent.
    The term `$ComponentName = 4` means that the action state on the component is run from source. Note that an action state of advertise is not valid for a component.
* `?ComponentName = $ComponentName`
    Run action only on the reinstallation of a component.
