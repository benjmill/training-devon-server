package io.oasp.gastronomy.restaurant.tablemanagement.common.api.datatype;

/**
 * Represents the {@link io.oasp.gastronomy.restaurant.tablemanagement.common.api.Table#getState() state} of a
 * {@link io.oasp.gastronomy.restaurant.tablemanagement.common.api.Table}.
 *
 * @author etomety
 */
public enum TableState {
  /** The state of a free {@link io.oasp.gastronomy.restaurant.tablemanagement.common.api.Table}. */
  FREE,

  /** The state of a reserved {@link io.oasp.gastronomy.restaurant.tablemanagement.common.api.Table}. */
  RESERVED,

  /** The state of a occupied {@link io.oasp.gastronomy.restaurant.tablemanagement.common.api.Table}. */
  OCCUPIED;

  /**
   * @return <code>true</code> if {@link #FREE}, <code>false</code> otherwise.
   */
  public boolean isFree() {

    return (this == FREE);
  }

  /**
   * @return <code>true</code> if {@link #RESERVED}, <code>false</code> otherwise.
   */
  public boolean isReserved() {

    return (this == RESERVED);
  }

  /**
   * @return <code>true</code> if {@link #OCCUPIED}, <code>false</code> otherwise.
   */
  public boolean isOccupied() {

    return (this == OCCUPIED);
  }

  // /**
  // * @return <code>true</code> if the
  // * {@link io.oasp.gastronomy.restaurant.tablemanagement.persistence.api.entity.Table} has opened orders.
  // */
  // public boolean isOrdersopen() {
  //
  // return (this == ORDERSOPEN);
  // }
}
