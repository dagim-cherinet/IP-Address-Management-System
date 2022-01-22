const mongoose = require("mongoose");

const NetworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },

  network_name: {
    type: String,
    default: "no name",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  network_address: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  subnet_mask: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  number_of_allocated_IP: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  number_of_usable_hosts: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  number_of_hosts_wasted: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  first_host_address: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  last_host_address: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
  broadcast_address: {
    type: String,
    default: "0.0.0.0",
    trim: true,
    maxlength: [20, " address can not be more than 20 characters"],
  },
});

module.exports = mongoose.model("Networks", NetworkSchema);
